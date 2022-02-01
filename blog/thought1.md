[//]: <> (raw url: https://raw.githubusercontent.com/portableCoder/portableThoughts/main/blog/thought1.md)

React is one of the most popular front end frameworks out there. It supports a plethora of different platforms, but what you might not have known is that you
can even build a CLI application with react.

There are thousands of different wordle clones you can find online these days, mostly web-based. I wanted to recreate it too, but I had a different approach -- I wanted to make it a cli-based game. I also wanted to use react to make it, so I opted on using the great [React-Ink](https://github.com/vadimdemedes/ink) library which allows you to build react-based
CLI-applications by utilizing a custom renderer for the command line.

I started by initializing a 6x5 in a state like so:

```ts
const [wordMatrix, setWordMatrix] = useState(() => {
  let arr: Array<
    Array<{
      bgColor: LiteralUnion<typeof ForegroundColor, string>;
      letter: string;
    }>
  > = [];
  for (let index = 0; index < 6; index++) {
    let arr_temp: Array<{
      bgColor: LiteralUnion<typeof ForegroundColor, string>;
      letter: string;
    }> = [];
    for (let j = 0; j < 5; j++) {
      arr_temp.push({ bgColor: null, letter: "" });
    }
    arr.push(arr_temp);
  }
  return arr;
});
```

You may have noticed that each cell in my word matrix has a letter and a background color associated with. That is how i keep track of if a word is correct, or is correct
is but at a wrong place or is incorrent.

I then create another state with that keeps track of in which cell the user is entering characters at, like

```ts
const [currentRowCol, setCurrentRowCol] = useState({ r: 0, c: 0 });
```

Next, I map the view with this matrix:

```tsx
<Box>
  {wordMatrix.map((el, i) => {
    const { r, c } = currentRowCol;
    return (
      <Box
        key={i}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {el.map((t, j) => (
          <Box
            key={j}
            width={6}
            height={2}
            borderColor={r === i && c == j ? "redBright" : "cyan"}
            b
            orderStyle="single"
          >
            <Text
              bold
              color="whiteBright"
              backgroundColor={wordMatrix[i][j].bgColor}
              key={j}
            >
              {" " + wordMatrix[i][j].letter + " "}
            </Text>
          </Box>
        ))}
      </Box>
    );
  })}
</Box>
```

I have defined some logic to determine what background color to give to the text.

next, I defined the keyboard like so

```tsx
const keyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
] as const;

{
  keyboard.map((el, i) => {
    return (
      <Box
        key={i}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {el.map((t, j) => {
          // incorrectLetters is a state array that contains the incorrect letters
          const color = incorrectLetters.find((ltr) => t === ltr)
            ? "gray"
            : "white";
          return (
            <Box key={j} width={6} alignItems="center" height={2}>
              <Text
                backgroundColor={color}
                color={color === "white" ? "blackBright" : "whiteBright"}
                bold
              >
                {"  " + t + "  "}
              </Text>
            </Box>
          );
        })}
      </Box>
    );
  });
}
```

to generate a random word, I used the `randomWords` package like so:

```ts
const getRWord = () => {
  return randomWords({
    exactly: 1,
    maxLength: 5,
  })[0].toUpperCase();
};

const [word] = useState(() => {
  let rword = getRWord();
  while (rword.length !== 5) {
    rword = getRWord();
  }
  return rword;
});
```

Now, all that's required to do is to handle the input. For input, `react-ink` provides the `useInput` hook that takes a callback that fires when the user enters something to the command line.

```ts
useInput((input, key) => {
  input = input.toUpperCase();
  if (key.return) {
    let { c, r } = currentRowCol;
    let wMatrix = [...wordMatrix];
    let wordArr = word.split("");
    let arr = wMatrix[r];
    let potentialArr = [];
    arr.forEach((l, i) => {
      let letter = l.letter;
      let letterRandom = wordArr[i];
      if (letter === letterRandom) {
        l.bgColor = "green";
        arr[i] = l;
        potentialArr.forEach((el) => {
          if (el.index !== i && el.descriptor.letter === l.letter) {
            arr[el.index] = { ...el.descriptor, bgColor: "gray" };
            setIncorrectLetters((prev) => [...prev, el.descriptor.letter]);
          }
        });
      } else if (wordArr.find((rnd) => rnd === letter)) {
        l.bgColor = "yellow";

        arr[i] = l;
        potentialArr.push({ descriptor: l, index: i });
      } else {
        setIncorrectLetters((prev) => [...prev, letter]);
        l.bgColor = "gray";
        arr[i] = l;
      }
    });

    wMatrix[r] = [...arr];
    setWordMatrix([...wMatrix]);
    let correctAnswers = arr.filter((ar) => ar.bgColor === "green").length;
    if (correctAnswers === 5) {
      setGame((prev) => {
        return { ...prev, completed: true, won: true };
      });
      exit();
    }

    r += 1;
    c = 0;

    if (r > 5) {
      let correctAnswers = wordMatrix[5].filter(
        (ar) => ar.bgColor === "green"
      ).length;
      if (correctAnswers < 5) {
        setGame((prev) => {
          return { ...prev, completed: true, won: false };
        });
      } else if (correctAnswers === 5) {
        setGame((prev) => {
          return { ...prev, completed: true, won: true };
        });
      }
      exit();
    }
    setCurrentRowCol({ c, r });
  } else if (key.backspace) {
    let currArr = [...wordMatrix];

    let { c, r } = currentRowCol;
    currArr[r][c] = { ...currArr[r][c], letter: "" };
    if (c !== 0) c -= 1;

    setWordMatrix(() => [...currArr]);
    setCurrentRowCol({ c, r });
  } else if (input === keyboard.flat().find((el) => el === input)) {
    let currArr = [...wordMatrix];

    let { c, r } = currentRowCol;

    currArr[r][c] = { ...currArr[r][c], letter: input };
    if (c + 1 > 4) {
      c = 4;
    } else {
      c += 1;
    }
    setWordMatrix(() => [...currArr]);
    setCurrentRowCol({ c, r });
  }
});
```

Essentially what is being handled here is, when the user enters a letter, it gets validated and placed into a the current cell. the cell is then incremented to the right. When the user presses backspace, the letter is deleted from the cell and cell moves one to the left. Else, if the user presses `return` key, it moves over to the next row and what letters are correct/incorrent are validated. When the user has run out of all tries and has not won the game, the game's state will be set to `{won:false,completed:true}`.

Basically that is what the game's logic is. You can check out the full source code in this [repo](https://github.com/portableCoder/Wordly).

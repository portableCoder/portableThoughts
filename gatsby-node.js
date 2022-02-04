const thoughtData = require('./thoughts.json')
const { createLink } = require('./createLink')





exports.createPages = async function ({ actions, graphql }) {

    thoughtData.forEach(thought => {
        const slug = createLink(thought.title)

        actions.createPage({
            path: slug,
            component: require.resolve(`./src/components/Thought.tsx`),
            context: { ...thought },
        })
    })
}
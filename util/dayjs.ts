import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat'; // Import the localizedFormat plugin

import 'dayjs/locale'; // Import any additional locales you want to support

dayjs.extend(localizedFormat); // Extend dayjs with the localizedFormat plugin
export default dayjs

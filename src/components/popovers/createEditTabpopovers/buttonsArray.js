/* eslint-disable react/react-in-jsx-scope */
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import {
  FILTER,
  GROUP,
  LAYOUT,
  PROPERTIES,
  SORT,
} from "../../../constants/headerContantes/headerConstantes";

const buttons = [
  // eslint-disable-next-line react/jsx-filename-extension
  ["Layout", LAYOUT, <DashboardIcon />],
  ["Properties", PROPERTIES, <FormatListBulletedIcon />],
  ["Filter", FILTER, <FilterListIcon />],
  ["Sort", SORT, <ImportExportIcon />],
  ["Group", GROUP, <CalendarViewMonthIcon />],
];

export default buttons;

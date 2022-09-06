/* eslint-disable react/react-in-jsx-scope */
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import NumbersIcon from "@mui/icons-material/Numbers";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PeopleIcon from "@mui/icons-material/People";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LinkIcon from "@mui/icons-material/Link";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FunctionsIcon from "@mui/icons-material/Functions";
import CallMadeIcon from "@mui/icons-material/CallMade";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PersonIcon from "@mui/icons-material/Person";
import TextFormatIcon from "@mui/icons-material/TextFormat";

const PROPERTY_ICONS = {
  // eslint-disable-next-line react/jsx-filename-extension
  title: <TextFormatIcon fontSize="small" />,
  text: <FormatAlignLeftIcon fontSize="small" />,
  number: <NumbersIcon fontSize="small" />,
  select: <ArrowDropDownCircleIcon fontSize="small" />,
  multiSelect: <FormatListBulletedIcon fontSize="small" />,
  status: <RotateRightIcon fontSize="small" />,
  date: <EventNoteIcon fontSize="small" />,
  person: <PeopleIcon fontSize="small" />,
  filesMedia: <AttachFileIcon fontSize="small" />,
  checkBox: <CheckBoxIcon fontSize="small" />,
  url: <LinkIcon fontSize="small" />,
  mail: <AlternateEmailIcon fontSize="small" />,
  phone: <LocalPhoneIcon fontSize="small" />,
  formula: <FunctionsIcon fontSize="small" />,
  relation: <CallMadeIcon fontSize="small" />,
  rollup: <SearchIcon fontSize="small" />,
  createdTime: <AccessTimeFilledIcon fontSize="small" />,
  createdBy: <PersonIcon fontSize="small" />,
  lastEditedTime: <AccessTimeFilledIcon fontSize="small" />,
  lastEditedBy: <PersonIcon fontSize="small" />,
};

export default PROPERTY_ICONS;

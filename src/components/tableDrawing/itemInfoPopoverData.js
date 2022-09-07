/* eslint-disable react/react-in-jsx-scope */
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CreateIcon from "@mui/icons-material/Create";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import {
  deleteSelectedRow,
  duplicateRow,
} from "../../features/tableDataInfo/tableDataInfoSlice";

const itemInfoPopoverDataButtons = [
  // eslint-disable-next-line react/jsx-filename-extension
  [<DeleteIcon fontSize="small" />, "Delete", "Del", deleteSelectedRow],
  [<ContentCopyIcon fontSize="small" />, "Duplicate", "Ctrl+D", duplicateRow],
  [<InsertLinkIcon fontSize="small" />, "Copy link", ""],
  [<CallMadeIcon fontSize="small" />, "Open in new tab", "Ctrl+Shift+Enter"],
  [<CreateIcon fontSize="small" />, "Rename", "Ctrl+Shift+R"],
  [
    <FormatListBulletedIcon fontSize="small" />,
    "Edit property",
    <KeyboardArrowRightIcon />,
  ],
  [<ShortcutIcon fontSize="small" />, "Move to", "Ctrl+Shift+P"],
];

export default itemInfoPopoverDataButtons;

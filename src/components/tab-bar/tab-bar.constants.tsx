import { ReactElement } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import {
  BarnIcon,
  KnightIcon,
  ScrollIcon,
} from "@/src/components/icons";

const ICONS: { [key: string]: (color: string) => ReactElement } = {
  index: (color: string): ReactElement => <BarnIcon size={24} color={color} />,
  messages: (color: string): ReactElement => (
    <ScrollIcon size={24} color={color} />
  ),
  campaigns: (color: string): ReactElement => (
    <FontAwesome5 name="dice-d20" size={28} color={color} />
  ),
  notifications: (color: string): ReactElement => (
    <Entypo name="bell" size={24} color={color} />
  ),
  profile: (color: string): ReactElement => (
    <KnightIcon size={24} color={color} />
  ),
};

export { ICONS };

import { DEFAULT_COLORS } from "@/src/theme/colors";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: DEFAULT_COLORS.secondary,
        backgroundColor: DEFAULT_COLORS.primary,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: "bold",
        color: DEFAULT_COLORS.white,
      }}
      text2Style={{
        fontSize: 14,
        color: DEFAULT_COLORS.white,
        opacity: 0.8,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: DEFAULT_COLORS.tertiary,
        backgroundColor: DEFAULT_COLORS.primary,
      }}
      text1Style={{
        fontSize: 16,
        color: DEFAULT_COLORS.white,
      }}
      text2Style={{
        color: DEFAULT_COLORS.white,
      }}
    />
  ),
};

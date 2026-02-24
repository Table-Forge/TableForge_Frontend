import React, { ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  ModalProps,
} from "react-native";
import { Button } from "@/src/components/button/button";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { fonts } from "@/src/theme/fonts";

interface GenericModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  confirmVariant?: "primary" | "tertiary" | "tertiary";
  showFooter?: boolean;
  animationType?: ModalProps["animationType"];
}

export const ModalBase = ({
  visible,
  onClose,
  title,
  description,
  children,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  confirmVariant = "tertiary",
  showFooter = true,
  animationType = "fade",
}: GenericModalProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={styles.container}
        >
          <Text style={styles.title}>{title}</Text>

          {description && <Text style={styles.message}>{description}</Text>}

          {children && <View style={styles.content}>{children}</View>}

          {showFooter && (
            <View style={styles.buttonContainer}>
              <Button
                variant="primary"
                size="sm"
                onPress={onClose}
                text={cancelText}
              />

              {onConfirm && (
                <Button
                  variant={confirmVariant}
                  size="sm"
                  onPress={onConfirm}
                  text={confirmText}
                />
              )}
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: DEFAULT_COLORS.primary,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.secondary,
    elevation: 10,
    shadowColor: DEFAULT_COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    ...fonts.heavy,
    color: DEFAULT_COLORS.white,
    fontSize: 20,
    marginBottom: 8,
  },
  message: {
    ...fonts.regular,
    color: DEFAULT_COLORS.white,
    opacity: 0.8,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  content: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 8,
  },
});

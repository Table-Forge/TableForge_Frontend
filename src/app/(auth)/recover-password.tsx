import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { Input } from "@/src/components/input/input";
import { Button } from "@/src/components/button/button";
import LogoIcon from "@/src/assets/images/logo2.png";
import { BrandName } from "@/src/components/brand-name/brand-name";
import {
  IRecoverPassword,
  RecoverPasswordSchema,
} from "@/src/features/users/schemas/user.schema";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { Label } from "@/src/components/label/label";
import { MainContainer } from "@/src/components/main-container/main-container";
import { ThemedText } from "@/src/components/themed-text/themed-text";

export default function RecoverPasswordScreen() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRecoverPassword>({
    resolver: zodResolver(RecoverPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: IRecoverPassword) => {
    Toast.show({
      type: "success",
      text1: "Corvo enviado!",
      text2: "Verifique seu pergaminho de mensagens.",
      position: "top",
      visibilityTime: 4000,
    });
    // router.back()
  };

  return (
    <MainContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header com Aura Neon */}
          <View style={styles.header}>
            <View style={styles.logoWrapper}>
              <Image
                source={LogoIcon}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <BrandName style={styles.title} />
            <ThemedText style={styles.subtitle}>
              Perdeu o segredo da sua conta?
            </ThemedText>
          </View>

          {/* Card de Resgate */}
          <View style={styles.formCard}>
            <ThemedText style={styles.instructionText}>
              Não se preocupe, aventureiro. Digite seu endereço de mensageiro e
              o Mago Avalon enviará um feitiço de restauração.
            </ThemedText>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <View style={styles.fieldContainer}>
                  <Label text="Endereço de Mensageiro (E-mail)" />
                  <Input
                    placeholder="seu@email.com"
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={errors.email?.message?.toString()}
                  />
                </View>
              )}
            />

            <Button
              variant="tertiary"
              onPress={handleSubmit(onSubmit)}
              text="ENVIAR CORVO"
            />
          </View>

          <View style={styles.footerLinks}>
            <TouchableOpacity
              onPress={() => router.navigate("/login")}
              style={styles.backButton}
            >
              <ThemedText style={styles.linkText}>
                Lembrou seu segredo?{" "}
                <ThemedText style={styles.linkTextBold}>
                  Voltar para o login
                </ThemedText>
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: DEFAULT_COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: DEFAULT_COLORS.tertiary,
    shadowColor: DEFAULT_COLORS.tertiary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  logoImage: { width: 70, height: 70 },
  title: { fontSize: 32, marginTop: 16 },
  subtitle: {
    textAlign: "center",
    marginTop: 8,
    opacity: 0.7,
    fontSize: 14,
  },
  formCard: {
    backgroundColor: "rgba(26, 26, 46, 0.85)",
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(126, 135, 226, 0.2)",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  instructionText: {
    fontSize: 15,
    lineHeight: 22,
    color: DEFAULT_COLORS.grays._100,
    textAlign: "center",
    marginBottom: 10,
  },
  fieldContainer: { width: "100%" },
  submitButton: {
    height: 56,
  },
  footerLinks: {
    marginTop: 30,
    alignItems: "center",
  },
  backButton: {
    padding: 10,
  },
  linkText: {
    color: DEFAULT_COLORS.grays._200,
    fontSize: 14,
  },
  linkTextBold: {
    color: DEFAULT_COLORS.tertiary,
    fontWeight: "bold",
  },
});

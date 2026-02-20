import { Button } from "@/src/components/button/button";
import { MainContainer } from "@/src/components/main-container/main-container";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { useAuth } from "@/src/context/auth";

export default function Profile() {
  const { signOut } = useAuth();

  return (
    <MainContainer>
      <ThemedText>Profile</ThemedText>

      <Button text="Logout" variant="tertiary" onPress={signOut} />
    </MainContainer>
  );
}

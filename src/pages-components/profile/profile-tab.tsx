import { InfoCard } from "@/src/components/info-card/info-card";
import { styles as infoCardStyles } from "@/src/components/info-card/info-card";
import { formatDate } from "@/src/utils/format";
import { Tag } from "@/src/components/tag/tag";
import { ThemedText } from "@/src/components/themed-text/themed-text";
import { View } from "react-native";
import { IUser } from "@/src/features/users/schemas/user.schema";
import { StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { Button } from "@/src/components/button/button";
import FeatherIcons from "react-native-vector-icons/Feather";

interface IProps {
  data?: IUser;
}

export const ProfileTab = ({ data }: IProps) => {
  return (
    <>
      <InfoCard title="Ficha Técnica" onEdit={() => {}}>
        <View style={infoCardStyles.cardContent}>
          <View style={infoCardStyles.cardContentItem}>
            <ThemedText style={infoCardStyles.cardContentLabel}>
              Data de Nascimento
            </ThemedText>
            <ThemedText style={infoCardStyles.cardContentValue}>
              {data?.birthDate ? formatDate(data?.birthDate) : "-"}
            </ThemedText>
          </View>
          <View style={infoCardStyles.cardContentItem}>
            <ThemedText style={infoCardStyles.cardContentLabel}>
              Gênero
            </ThemedText>
            <ThemedText style={infoCardStyles.cardContentValue}>
              {data?.gender || "-"}
            </ThemedText>
          </View>
        </View>
        <View style={infoCardStyles.cardContentItem}>
          <ThemedText style={infoCardStyles.cardContentLabel}>
            E-mail
          </ThemedText>
          <ThemedText style={infoCardStyles.cardContentValue}>
            {data?.email || "-"}
          </ThemedText>
        </View>
      </InfoCard>

      <InfoCard title="Preferências de Jogo" onEdit={() => {}}>
        <View style={infoCardStyles.cardContentItem}>
          <ThemedText style={infoCardStyles.cardContentLabel}>
            Sistema
          </ThemedText>
          <View style={infoCardStyles.cardContent}>
            <Tag text="Tormenta" />
            <Tag text="D&D" />
          </View>
        </View>
        <View style={infoCardStyles.cardContentItem}>
          <ThemedText style={infoCardStyles.cardContentLabel}>
            Classe
          </ThemedText>
          <View style={infoCardStyles.cardContent}>
            <Tag text="Clérigo" />
            <Tag text="Artífice" />
            <Tag text="Samurai" />
          </View>
        </View>
      </InfoCard>

      <InfoCard title="Meu Plano">
        <View
          style={[
            styles.planWrapper,
            { backgroundColor: DEFAULT_COLORS.primary },
          ]}
        >
          <View style={infoCardStyles.cardTitle}>
            <ThemedText fontSize={16} weight="bold">
              Básico
            </ThemedText>

            <ThemedText
              style={{ fontSize: 16, color: DEFAULT_COLORS.tertiary }}
              weight="bold"
            >
              Grátis!
            </ThemedText>
          </View>

          <View style={styles.planList}>
            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Pesquisar campanhas em sua localidade
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Criar e entrar em campanhas
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Visualizar e participar do Chat da Campanha (Sala de Taverna)
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Receber notificações sobre eventos futuros
              </ThemedText>
            </View>
          </View>
        </View>

        <View style={styles.planWrapper}>
          <View style={infoCardStyles.cardTitle}>
            <ThemedText fontSize={16} weight="bold">
              Premium
            </ThemedText>

            <ThemedText
              style={{ fontSize: 16, color: DEFAULT_COLORS.tertiary }}
              weight="bold"
            >
              R$ 9,99/mês
            </ThemedText>
          </View>

          <View style={styles.planList}>
            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Todas as funcionalidades do Plano Básico
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Criar e salvar personagens ilimitados na página de perfil
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Criar tópicos no Fórum
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Selo Premium ao lado do nome do usuário
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Destaque nas campanhas criadas por você, aparecendo primeiro na
                listagem
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Campanhas privadas
              </ThemedText>
            </View>

            <View style={styles.planItem}>
              <FeatherIcons
                name="check-circle"
                size={16}
                color={DEFAULT_COLORS.white}
              />
              <ThemedText fontSize={16} style={{ flex: 1 }}>
                Personalização de Banner de campanha
              </ThemedText>
            </View>

            <Button
              onPress={() => console.log("apertei")}
              variant="tertiary"
              text="Quero Este!"
            />
          </View>
        </View>
      </InfoCard>
    </>
  );
};

export const styles = StyleSheet.create({
  planWrapper: {
    display: "flex",
    gap: 10,
    padding: 16,

    flex: 1,

    borderRadius: 15,

    borderWidth: 2,
    borderColor: "rgba(251, 69, 1, 0.3)",

    position: "relative",
  },
  planList: {
    display: "flex",
    gap: 10,
  },
  planItem: {
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
    width: "100%",
  },
  callWrapper: {
    paddingHorizontal: 10,
  },
});

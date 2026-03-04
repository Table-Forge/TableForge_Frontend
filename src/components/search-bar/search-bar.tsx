import React, { useEffect, useState } from "react";
import { Pressable, TextInput, View, StyleSheet } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { SlidersIcon } from "@/src/assets/icons";
import { useLocation } from "@/src/hooks/use-location";
import { DEFAULT_COLORS } from "@/src/theme/colors";
import { Button } from "../button/button";
import { ErrorMessage } from "../error-message/error-message";
import { Label } from "../label/label";
import { MultipleOptions } from "../multiple-options/multiple-options";
import { ProgressInput } from "../progress-input/progress-input";
import { DefaultTextInput } from "../text-input/text-input";
import { ThemedText } from "../themed-text/themed-text";
import { ISearchSchema, SearchSchema } from "./search-bar.schema";

export const SearchBar = () => {
  const { location } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const hookForm = useForm({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      search: "",
      location: location?.city || "",
      level: [],
      playerQty: 1,
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = hookForm;

  const searchValue = watch("search");

  const onSubmit = (data: ISearchSchema) => {
    console.log("Forjando busca:", data);
    setIsOpen(false);
  };

  const animatedFilterStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isOpen ? 1 : 0, { duration: 250 }),
      transform: [
        {
          translateY: withSpring(isOpen ? 0 : -15, {
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
      display: isOpen ? "flex" : "none",
    };
  }, [isOpen]);

  useEffect(() => {
    if (!location) return;
    const locationString = `${location?.district || ""}${
      location?.district && location?.city ? ", " : ""
    }${location?.city || ""}`;
    setValue("location", locationString || "");
  }, [location, setValue]);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.topFilter, isOpen && styles.topFilterActive]}>
        <View style={styles.searchContainer}>
          <Pressable onPress={handleSubmit(onSubmit)}>
            <MaterialIcons
              name="search"
              size={24}
              color={
                searchValue ? DEFAULT_COLORS.tertiary : "rgba(255,255,255,0.3)"
              }
            />
          </Pressable>

          <Controller
            control={control}
            name="search"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.searchInput}
                placeholder="Rastrear mesa ou sistema..."
                value={value}
                onChangeText={onChange}
                placeholderTextColor="rgba(255,255,255,0.3)"
                onSubmitEditing={handleSubmit(onSubmit)}
                selectionColor={DEFAULT_COLORS.tertiary}
              />
            )}
          />
        </View>

        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={({ pressed }) => [
            styles.filterButton,
            isOpen && styles.filterButtonActive,
            pressed && { transform: [{ scale: 0.96 }] },
          ]}
        >
          <SlidersIcon
            size={20}
            color={isOpen ? DEFAULT_COLORS.tertiary : DEFAULT_COLORS.white}
          />
        </Pressable>
      </View>

      <Animated.View style={[styles.bottomFilter, animatedFilterStyle]}>
        <View style={styles.filterHeader}>
          <ThemedText weight="bold" style={styles.filterTitle}>
            PARÂMETROS DE BUSCA
          </ThemedText>
        </View>

        <View style={styles.fieldset}>
          <Label text="Localização da Mesa" />
          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, value } }) => (
              <DefaultTextInput
                hasError={!!errors?.location?.message}
                placeholder="Ex: Reino do Sul..."
                value={value}
                onChangeText={onChange}
                type="location"
              />
            )}
          />
          {errors?.location?.message && (
            <ErrorMessage text={errors.location.message.toString()} />
          )}
        </View>

        <View style={styles.fieldset}>
          <Label text="Nível de Experiência" />
          <View style={styles.radioContainer}>
            <MultipleOptions
              hookform={hookForm}
              name="level"
              hasError={!!errors?.level?.message}
              options={[
                { value: "easy", name: "Novato" },
                { value: "medium", name: "Aventureiro" },
                { value: "hard", name: "Veterano" },
                { value: "professional", name: "Lenda" },
              ]}
            />
          </View>
          {errors?.level?.message && (
            <ErrorMessage text={errors.level.message.toString()} />
          )}
        </View>

        <View style={styles.fieldset}>
          <Label text="Vagas na Party" />
          <ProgressInput
            hookform={hookForm}
            name="playerQty"
            min={1}
            max={10}
          />
          {errors?.playerQty?.message && (
            <ErrorMessage text={errors.playerQty.message.toString()} />
          )}
        </View>

        <Button
          variant="tertiary"
          text="Buscar"
          onPress={handleSubmit(onSubmit)}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    position: "relative",
    zIndex: 999,
  },
  topFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(26, 26, 46, 0.95)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(126, 135, 226, 0.2)",
    elevation: 5,
  },
  topFilterActive: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: DEFAULT_COLORS.secondary,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  searchInput: {
    color: DEFAULT_COLORS.white,
    fontSize: 16,
    flex: 1,
  },
  filterButton: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "transparent",
  },
  filterButtonActive: {
    backgroundColor: "rgba(251, 69, 1, 0.1)",
    borderColor: DEFAULT_COLORS.tertiary,
  },
  bottomFilter: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "rgba(26, 26, 46, 0.98)",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: DEFAULT_COLORS.secondary,
    padding: 20,
    gap: 18,
    elevation: 10,
  },
  filterHeader: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(126, 135, 226, 0.2)",
    paddingBottom: 8,
  },
  filterTitle: {
    fontSize: 11,
    color: DEFAULT_COLORS.grays._200,
    letterSpacing: 1.5,
  },
  fieldset: {
    gap: 8,
  },
  radioContainer: {
    marginTop: 4,
    width: "100%",
  },
});

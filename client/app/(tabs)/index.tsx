import React from "react";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header showMenu showCart showLogo />
    </SafeAreaView>
  );
};

export default Home;

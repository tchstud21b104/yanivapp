import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Card from "./card";

export default function MyHand() {
  const [cards, changeCards] = React.useState([
    { id: "3C", selected: false },
    { id: "2H", selected: false },
    { id: "QC", selected: false },
  ]);

  const toggleSelectCard = (card) => {
    let currentCards = cards.map((currCard) => {
      if (currCard === card) {
        currCard.selected = !card.selected;
      }
      return currCard;
    });
    changeCards(currentCards);
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Pressable
          key={index}
          style={[styles.card, card.selected ? styles.selectedCard : false]}
          onPress={() => toggleSelectCard(card)}
        >
          <Card id={card.id} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#7CCEE8",
    alignItems: "flex-end",
    margin: 10,
  },
  card: {
    margin: 5,
  },
  selectedCard: {
    bottom: 20,
  },
});

function color(color) {
  switch(color.toLowerCase()) {
    case "yellow":
    case "pink":
    case "orange":
      return "Light color";
    case "blue":
    case "purple":
    case "brown":
      return "Dark color";
    default:
      return "Unknown color";
  }
}
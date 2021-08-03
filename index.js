function superbowlWin(record) {
  const winningSeason = record.find(season => season.result == "W")
  if (winningSeason) {
    return winningSeason.year
  } else {
    return undefined
  }
}

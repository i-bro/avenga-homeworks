function tellStory(arr) {
    let name = arr[0];
    let mood = arr[1];
    let activity = arr[2];

    return `${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

console.log(tellStory(["Alex", "happy", "coding"]));
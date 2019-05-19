export class PostService {
  posts = [
    {
      title: "Mon premier post",
      content: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
      loveIts: -2,
      created_at: new Date,
    },
    {
      title: "Mon deuxieme post",
      content: "Sweet apple pie cheesecake. Macaroon I love gingerbread marshmallow croissant tiramisu I love brownie. Cake I love sugar plum halvah apple pie halvah biscuit croissant powder. Cupcake I love I love chupa chups wafer lollipop marzipan wafer cake. I love marzipan chocolate. I love pie sweet sugar plum pie jujubes. Danish dragée halvah I love liquorice topping ice cream pudding pudding. ",
      loveIts: 0,
      created_at: new Date,
    },
    {
      title: "Encore un post",
      content: "Sugar plum sweet jelly lemon drops macaroon apple pie marshmallow bonbon. Chupa chups chocolate bar apple pie donut tart I love dragée biscuit. Icing pie pie gummi bears. Cookie powder wafer croissant cake dragée topping brownie. I love oat cake wafer sweet cotton candy tootsie roll halvah halvah brownie.",
      loveIts: 1,
      created_at: new Date,
    },
  ];

  dontLoveIt(index: number){
    this.posts[index].loveIts -=1;
  }

  loveIt(index: number){
    this.posts[index].loveIts += 1;
  }

}

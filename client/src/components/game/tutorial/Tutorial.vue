<template>
<div class="menu-page container">
    <menu-title title="Tutorial" @onCloseRequested="onCloseRequested"/>

    <p>
        Welcome to the <strong>Solaris</strong> tutorial, this tutorial aims to cover the basics on how to play.
    </p>

    <p>
        By the end of this tutorial you will have learned:
    </p>

    <ul>
        <li>What game ticks are</li>
        <li>How to build star infrastructure</li>
        <li>How to build carriers</li>
        <li>How to capture stars</li>
        <li>How to research new technologies</li>
        <li>How to win the game</li>
    </ul>

    <hr />

    <h4>The Basics</h4>

    <p>
        The game runs in <strong>ticks</strong>, in standard games these occur once every <span class="text-warning">30 minutes</span>.
        Every time a tick occurs, carriers will move, ships are built, research is conducted, combat between players is performed and stars are captured.
    </p>

    <p class="text-warning">
        <i>Note: This tutorial is <strong>turn based</strong>, use the green tick at the top right to submit your turn and the game will progress within a few seconds.</i>
    </p>

    <h4>Galaxy</h4>
    
    <p>
        The map currently displays <strong>Stars</strong> and <strong>Carriers</strong> controlled by you and your opponent.
        <span class="text-danger">Try zooming in and panning around to get a closer look</span>.
    </p>

    <hr />

    <h4>Stars</h4>

    <p>
        Stars on the map are displayed with their name, how many ships are garrisoned and how much infrastructure the star has.
        Stars controlled by players are coloured with the player's colour and stars that do not have an owner do not have a colour displayed.
    </p>

    <p>
        To win a game of Solaris, you must capture a specified number of stars. You are currently in control of <span class="text-info">{{getStarCount.length}} stars</span>
        and you need to capture <span class="text-warning">{{getStarsForVictory}} stars</span> to win the game and end the tutorial.
    </p>

    <hr />

    <h4>Infrastructure</h4>

    <p>
        There are 3 types of infrastructure that can be built at stars, these are:
    </p>

    <ul>
        <li><strong>Economy</strong> - Generates income</li>
        <li><strong>Industry</strong> - Builds ships</li>
        <li><strong>Science</strong> - Contributes to research</li>
    </ul>

    <p>
        At the start of the game, you are in control of <span class="text-info">{{getStartingStars}} stars</span>. Click on a star on the map
        to view the star detail screen.
    </p>

    <p>
        <span class="text-danger">Try upgrading the <strong>Industry</strong> infrastructure on one of your stars</span>, this will increase the build speed of ships at the star.
    </p>

    <p>
        The numbers displayed directly above stars on the map are the Economy, Industry and Science (E I S) values of the star.
    </p>

    <p class="text-warning">
        <i>Submit your turn and in a few seconds you will see ships being built at stars.</i>
    </p>

    <hr />

    <h4>Carriers &amp; Waypoints</h4>

    <p>
        In order to capture stars, you must build <strong>Carriers</strong>, use carriers to transport ships 
        across the galaxy to stars in order to capture them. A carrier must have at least 1 ship.
    </p>

    <p>
        Carriers can only be built at stars with garrisoned ships, <span class="text-danger">click on any of your stars and build a carrier there</span>.
    </p>

    <hr />

    <h4>Capturing Stars</h4>

    <p>
        Once you've built the carrier, edit the waypoints of the carrier to travel to stars that you do not own to capture them, 
        make sure you <span class="text-danger">load the carrier with enough ships</span> in case they run into a combat situation.
    </p>

    <p>
        At the start of the game, your capital star <a href="javascript:;" @click="onOpenStarDetailRequested">{{getPlayerHomeStar.name}}</a> has a carrier for free.
        Use this carrier to plot waypoints to stars.
    </p>

    <p class="text-warning">
        <i>Submit your turn and in a few seconds you will your carriers follow their waypoints and travel to nearby stars.</i>
    </p>

    <hr />

    <h4>Research &amp; Technology</h4>

    <p>
        Researching technology upgrades is critical in order to stay ahead of your opponents. 
        Technology is researched every tick using the <span class="text-info">Science</span> infrastructure built at your stars.
        The more science your stars have, the faster you will research new technologies.
    </p>

    <p>
        <span class="text-danger">Use the menu at the <strong>top right</strong> of the screen to navigate to the <strong>Research</strong> screen</span> and set your current research
        to <span class="text-info">Weapons</span>. This will make your ships more powerful and hit harder in combat once researched.
    </p>

    <p class="text-warning">
        <i>Submit your turn and in a few seconds you will see your research points increase.</i>
    </p>

    <hr />

    <h4>How to Win</h4>
    
    <p>
        To win a game of Solaris, you must capture a specified number of stars. You are currently in control of <span class="text-info">{{getStarCount.length}} stars</span>
        and you need to capture <span class="text-warning">{{getStarsForVictory}} stars</span> to win the game and end the tutorial.
    </p>

    <p class="text-danger">
        Keep producing ships, building carriers and plotting waypoints. Eliminate your opponent and capture the <strong>entire map</strong> to win this tutorial.
    </p>

    <div class="embed-responsive embed-responsive-16by9 mb-2">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/cnRXQMQ43Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p class="pb-2">
        The full Solaris wiki can be found <a :href="documentationUrl" target="_blank">here</a>.
    </p>
</div>
</template>

<script>
import MenuTitle from '../MenuTitle'
import GameHelper from '../../../services/gameHelper'

export default {
  components: {
    'menu-title': MenuTitle
  },
  methods: {
    onCloseRequested (e) {
      this.$emit('onCloseRequested', e)
    },
    onOpenStarDetailRequested (e) {
        this.$emit('onOpenStarDetailRequested', this.getPlayerHomeStar._id)
    }
  },
  computed: {
      userPlayer () {
          return GameHelper.getUserPlayer(this.$store.state.game)
      },
      getStarCount () {
          return GameHelper.getStarsOwnedByPlayer(this.userPlayer, this.$store.state.game.galaxy.stars)
      },
      getStarsForVictory () {
          return this.$store.state.game.state.starsForVictory
      },
      getPlayerHomeStar () {
          return GameHelper.getPlayerHomeStar(this.userPlayer, this.$store.state.game.galaxy.stars)
      },
      getStartingStars () {
          return this.$store.state.game.settings.player.startingStars
      },
      documentationUrl () {
        return process.env.VUE_APP_DOCUMENTATION_URL
      }
  }
}
</script>

<style scoped>
</style>

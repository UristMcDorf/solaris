<template>
<div>
    <div class="row" v-for="badge in badges" :key="badge.key">
        <div class="col-auto">
            <img :src="require(`../../../assets/badges/${badge.key}.png`)"/>

            <button class="btn btn-block btn-sm btn-success" v-if="userCredits >= badge.price" @click="purchaseBadge(badge)">
                <i class="fas fa-shopping-basket"></i> {{badge.price}} Credit<span v-if="badge.price > 1">s</span>
            </button>
            <router-link :to="{ name: 'galactic-credits-shop'}" class="btn btn-block btn-sm btn-danger" v-if="userCredits < badge.price">
                <i class="fas fa-coins"></i> {{badge.price}} Credit<span v-if="badge.price > 1">s</span>
            </router-link>
        </div>
        <div class="col">
            <h5>{{badge.name}}</h5>
            <p><small>{{badge.description}}</small></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
      badges: Array,
      userCredits: Number,
      recipientName: String
  },
  methods: {
    async purchaseBadge (badge) {
        if (!await this.$confirm(`Purchase Badge`, `Are you sure you want to purchase the '${badge.name}' badge for ${this.recipientName}? It will cost ${badge.price} credit(s).`)) {
            return
        }

        this.$emit('onPurchaseBadgeConfirmed', badge);
    }
  }
}
</script>

<style scoped>
img {
    width: 128px;
    height: 128px;
}
</style>

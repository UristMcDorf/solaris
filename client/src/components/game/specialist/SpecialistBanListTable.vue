<template>
    <table class="table table-sm table-striped">
        <thead>
            <th></th>
            <th>Name</th>
            <th></th>
            <th class="text-right">Banned</th>
        </thead>
        <tbody>
            <tr v-for="specialist in specialists" :key="specialist.id">
                <td>
                    <specialist-icon :type="specialistType" :defaultIcon="specialistDefaultIcon" :specialist="specialist"/>
                </td>
                <td>
                    {{specialist.name}}
                </td>
                <td>
                    <help-tooltip :tooltip="specialist.description"/>
                </td>
                <td class="text-right">
                    <div class="form-check" v-if="!game">
                        <input class="form-check-input" type="checkbox" v-model="specialist.banned" v-on:change="onSpecialistBanSelectionChanged">
                    </div>
                    <i class="fas fa-check text-danger" v-if="game && isBanned(specialist)"></i>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import SpecialistIconVue from '../specialist/SpecialistIcon'
import HelpTooltip from '../../HelpTooltip'

export default {
    components: {
        'specialist-icon': SpecialistIconVue,
        'help-tooltip': HelpTooltip,
    },
    props: {
        specialists: Array,
        specialistType: String,
        specialistDefaultIcon: String,
        game: Object
    },
    methods: {
        onSpecialistBanSelectionChanged () {
            this.$emit('onSpecialistBanSelectionChanged')
        },
        isBanned (specialist) {
            const banList = this.game.settings.specialGalaxy.specialistBans[this.specialistType]

            return banList.indexOf(specialist.id) > -1
        }
    }
}
</script>

<style scoped>

</style>
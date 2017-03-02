<template>
  <div>
    <modal
      v-if="modal.showModal === true"
      track-by="id">
      <h3 slot="header">{{modal.data.title}}</h3>
      <p slot="body">{{modal.data.bodyHTMl}}</p>
      <div slot="footer">
        <button class="btn btn-default float-left" @click="closeModal()">
          Back
        </button>
        <button class="btn btn-success" @click="addClose(modal.data.id)">
          Add to Cart
        </button>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    modal: state => state.modal
  }),
  methods: mapActions([
    'getModal',
    'closeModal',
    'addClose'
  ]),
  components: { Modal },
  created () {
    this.getModal()
  }
}
</script>

<template>
  <div class="animated fadeIn mx">
        <b-row>
            <b-col md="6" class="mx-auto">
                <b-card>
                    <div slot="header">
                        <strong>Cadastro de novo veículo </strong>
                    </div>
                    <b-alert :show="dismissCountDown"
                       variant="success"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                       Veículo cadastrado com sucesso!
                    </b-alert>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Placa:">
                                <b-form-input type="text" v-model="plate" class="form-control-warning" placeholder="Digite a placa do veículo" id="plate" required></b-form-input>
                                <b-form-valid-feedback>
                                    Placa inserida! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira a placa do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do Chassis:">
                                <b-form-input type="text" v-model="chassis" class="form-control-warning" placeholder="Digite o número do Chassis do veículo" id="chassis" required></b-form-input>
                                <b-form-valid-feedback>
                                    Chassis inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do Chassis do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                        <b-form validated novalidate>
                            <b-form-group label-for="inputError2" label="Número do patrimônio ou controle:">
                                <b-form-input type="text" v-model="control" class="form-control-warning" placeholder="Digite o número do patrimônio ou controle do veículo" id="control" required></b-form-input>
                                <b-form-valid-feedback>
                                    Número inserido! <span class="fa fa-hand-peace-o fa-lg mt-2"></span>
                                </b-form-valid-feedback>
                                <b-form-invalid-feedback>
                                    Por favor, insira o número do patrimônio ou controle do veículo <span class="fa fa-frown-o fa-lg mt-2"></span>
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </b-form>
                    </b-form-group>
                    <b-form-group>
                      <label for="name">Nome do Proprietário:</label>
                      <autocomplete
                        ref="costumers"
                        :source="costumers"
                        results-property="name"
                        :results-display="formattedDisplay"
                        @selected="addName"
                        placeholder="Entre com o nome do cliente ou empresa">
                      </autocomplete>
                    </b-form-group>
                    <b-form-group
                        label="Tipo de equipamento:"
                        label-for="basicSelect"
                        :label-cols="3"
                        :horizontal="true">
                        <b-form-select id="kind" v-model="kind"
                        :plain="true"
                        value="Selecione o tipo do equipamento">
                            <option v-for="k in kinds">{{k.kind}}</option>
                        </b-form-select>
                    </b-form-group>
                    <div slot="footer">
                        <b-button v-on:click="clearText()" type="reset" size="sm" variant="warning"><i class="fa fa-ban"></i> Apagar campos</b-button>
                        <b-button v-on:click="sendData()"  style="float:right" type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Cadastrar!</b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
import Autocomplete from 'vuejs-auto-complete'
import store from '@/store'

export default {
  name: 'vehicleForm',
  components: {
    Autocomplete
  },
  data () {
    return {
      plate: '',
      chassis: '',
      control: '',
      costumer: '',
      kind: '',
      kinds: [],
      costumers: [],
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      loading: false
    }
  },
  beforeCreate () {
    if (!store.state.isLogged) {
      this.$router.push('/')
    }
  },
  created () {
    axios.get(`/api/v1/equipment_types`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.$data.kinds = response.data.data
        this.$data.kinds = this.sortByKey(this.$data.kinds, 'kind')
      }).catch(e => { this.errors.push(e) })
    axios.get(`/api/v1/costumers`, {headers: {Authorization: localStorage.getItem('token')}}).then(
      response => {
        this.loading = true
        this.costumers = response.data.data
        this.costumers = this.sortByKey(this.costumers, 'name')
      }).catch(e => { this.errors.push(e) })
  },
  methods: {
    formattedDisplay (result) {
      return result.name
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = a[key]
        var y = b[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
      var self = this
      setTimeout(function () {
        self.clearText()
      }, 3000)
    },
    clearText () {
      this.$data.plate = ''
      this.$data.chassis = ''
      this.$data.control = ''
      this.$data.costumer = ''
      this.$data.kind = ''
      this.$refs.costumers.clearValues()
      console.log('cleared all entry text fields')
    },
    addName (client) {
      this.$data.costumer = client.selectedObject.name
    },
    sendData () {
      console.log('sending data with: \nplate -> ' + this.$data.plate + '\nchassis -> ' + this.$data.chassis + '\n control -> ' + this.$data.control +
      '\ncostumer -> ' + this.$data.costumer + '\nkind -> ' + this.$data.kind)
      axios.post('/api/v1/equipments/', {
        plate: this.$data.plate,
        chassis: this.$data.chassis,
        control_number: this.$data.control,
        proprietary: this.$data.costumer,
        kind: this.$data.kind,
        activated: true
      }, {headers: {Authorization: localStorage.getItem('token')}}).then(response => {}).catch(e => {
        this.errors.push(e)
      }).then(this.showAlert())
    }
  }
}
</script>


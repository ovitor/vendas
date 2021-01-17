Vue.component('product', {
  data: function () {
    return {
      count: 0 
    }
  },
  props: [
    'id',
    'title',
    'description',
    'price',
    'quantity',
    'image',
    'more_info',
    'condition',
    'sold'
  ],
  template: `
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="'./assets/images/' + image" :alt="image">
        </figure>
      </div> <!-- card-image -->
      <div class="card-content">
        R$ <span class="price">{{ price }}</span>
        <div class="content">
          {{ title }} <br> 
          {{ description }} <span v-if="more_info"> - <a :href="more_info" target="_blank">Mais informações</a> </span> <br>
          <div class="tags">
            <span class="tag is-danger">código: {{ id }}</span>
            <span class="tag" :class="{'is-info': condition === 'novo', 'is-warning': condition === 'usado' }">condição: {{ condition }}</span>
            <span class="tag" :class="{'is-info': quantity => 2, 'is-warning': quantity == 1, 'is-success': quantity >= 5 }">quantidade: {{ quantity }} </span>
          </div>
        </div>
      </div> <!-- card-content -->
    </div> <!-- card -->
  ` 
})

var app = new Vue({
  el: '#app',
  data: {
    website_title: 'produtos a venda',
    products: [
      // { 'id': 1, 'title': 'Panda Board', 'description': 'Placa de desenvolvimento ARM', 'price': '50,00', 'quantity': 1, 'image': 'produto-001.jpg', 'more_info': 'https://elinux.org/PandaBoard', 'condition': 'usado', 'sold': false },
      // { 'id': 2, 'title': 'Leitor RFID', 'description': 'Leitor RFID com 2 tags', 'price': '15,00', 'quantity': 1, 'image': 'produto-002.jpg', 'condition': 'novo', 'sold': false},
      // { 'id': 3, 'title': 'Hub', 'description': 'Hub 8 portas', 'price': '0,00', 'quantity': 1, 'image': 'produto-003.jpg', 'condition': 'usado', 'sold': false },
      // { 'id': 4, 'title': 'Sensor MQ-2', 'description': 'Sensor de gás butano', 'price': '10,00', 'quantity': 1, 'image': 'produto-004.jpg', 'condition': 'novo', 'sold': false },
      // { 'id': 5, 'title': 'Display', 'description': 'Display Nokia 5110', 'price': '20,00/peça', 'quantity': 2, 'image': 'produto-005.jpg', 'condition': 'novo', 'sold': false },
      // { 'id': 6, 'title': 'Adaptador FTDI', 'description': 'Adaptador FTDI', 'price': '5,00', 'quantity': 1, 'image': 'produto-006.jpg', 'condition': 'novo', 'sold': false },
      { 'id': 7, 'title': 'Módulo Bluetooth 4.0', 'description': 'Módulo bluetooth 4.0 HM-10', 'price': '10,00/peça', 'quantity': 2, 'image': 'produto-007.jpg', 'condition': 'novo', 'sold': false },
      // { 'id': 8, 'title': 'Protoboard', 'description': 'PCB protoboard, diversos tamanhos', 'price': '10,00', 'quantity': 1, 'image': 'produto-008.jpg', 'condition': 'usado', 'sold': false },
      // { 'id': 9, 'title': 'VoCore', 'description': 'Sistema embarcado VoCore', 'price': '30,00/peça', 'quantity': 2, 'image': 'produto-009.jpg', 'more_info': 'https://vocore.io/v2u.html', 'condition': 'novo', 'sold': false },
      { 'id': 10, 'title': 'Adaptador MicroSD para SD', 'description': 'Adaptador MicroSD para SD Card', 'price': '10,00', 'quantity': '+ de 5', 'image': 'produto-010.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 11, 'title': 'Sensor de umidade do solo', 'description': 'Módulo sensor de umidade do solo', 'price': '5,00', 'quantity': 2, 'image': 'produto-011.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 12, 'title': 'Sensor de toque', 'description': 'Sensor de toque', 'price': '5,00', 'quantity': 1, 'image': 'produto-012.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 13, 'title': 'Arduino Nano', 'description': 'Arduino Nano', 'price': '10,00', 'quantity': 1, 'image': 'produto-013.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 14, 'title': 'Leitor RFID', 'description': 'Leitor RFID RC-522', 'price': '10,00', 'quantity': 1, 'image': 'produto-014.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      { 'id': 15, 'title': 'Conversor USB Serial', 'description': 'Conversor USB Serial', 'price': '5,00', 'quantity': 1, 'image': 'produto-015.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 16, 'title': 'ESP 01', 'description': 'ESP 01', 'price': '5,00', 'quantity': 1, 'image': 'produto-016.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 17, 'title': 'Módulo ESP 8266', 'description': 'Módulo ESP 8266', 'price': '10,00', 'quantity': 1, 'image': 'produto-017.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 18, 'title': 'Módulo ESP 12F', 'description': 'Módulo ESP 12F', 'price': '10,00', 'quantity': 1, 'image': 'produto-018.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 19, 'title': 'Buzzer', 'description': 'Buzzer', 'price': '5,00', 'quantity': 1, 'image': 'produto-019.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 22, 'title': 'Arduino UNO', 'description': 'Arduino UNO', 'price': '5,00', 'quantity': 1, 'image': 'produto-022.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 23, 'title': 'Sensor de umidade', 'description': 'Sensor de umidade DHT11', 'price': '5,00', 'quantity': 1, 'image': 'produto-023.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 24, 'title': 'Fonte de computador', 'description': 'Fonte Akasa de computador', 'price': '10,00', 'quantity': 1, 'image': 'produto-024.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      // { 'id': 25, 'title': 'Cabo P2 - USB', 'description': 'Cabo P2 - USB', 'price': '0,00', 'quantity': 1, 'image': 'produto-025.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      { 'id': 26, 'title': 'Servo motor', 'description': 'Servo motor', 'price': '40,00', 'quantity': 1, 'image': 'produto-026.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      { 'id': 27, 'title': 'Servo SG90', 'description': 'Servo motor SG90', 'price': '15,00', 'quantity': 1, 'image': 'produto-027.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 28, 'title': 'Sensor MQ-9', 'description': 'Sensor monóxido de carbono', 'price': '5,00', 'quantity': 1, 'image': 'produto-028.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      // { 'id': 29, 'title': 'Dongle USB Wi-Fi', 'description': 'Dongle USB Wi-Fi', 'price': '10,00', 'quantity': 1, 'image': 'produto-029.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      // { 'id': 31, 'title': 'Dongle USB Bluetooth', 'description': 'Dongle USB Bluetooth', 'price': '5,00', 'quantity': 1, 'image': 'produto-031.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      // { 'id': 32, 'title': 'Micro motor', 'description': 'Micro motor vibracall', 'price': '50,00', 'quantity': '+ de 20', 'image': 'produto-032.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      { 'id': 34, 'title': 'Adaptador Ethernet', 'description': 'Adaptador Ethernet para arduino', 'price': '0,00', 'quantity': 1, 'image': 'produto-034.jpg', 'more_info': '', 'condition': 'usado', 'sold': false },
      // { 'id': 35, 'title': 'Módulo Matriz de Led', 'description': 'Módulo Display de Led 8x8', 'price': '10,00/peça', 'quantity': 1, 'image': 'produto-035.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      { 'id': 36, 'title': 'Adaptador FTDI 232', 'description': 'Adaptador FDTI 232', 'price': '5,00', 'quantity': 1, 'image': 'produto-036.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      { 'id': 37, 'title': 'Display 7 segmentos', 'description': 'Display 7 segmentos', 'price': '5,00', 'quantity': 2, 'image': 'produto-037.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
      { 'id': 38, 'title': 'Módulo carregador de bateria', 'description': 'Módulo carregador de bateria', 'price': '5,00', 'quantity': 1, 'image': 'produto-038.jpg', 'more_info': '', 'condition': 'novo', 'sold': false },
    ]
  }
})

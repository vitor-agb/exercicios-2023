import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DevChuva';
  navigation = [
    {
      value: 'Apresentação',
      link: '#apresentacao',
      active: false,
    },
    {
      value: 'Comitês',
      link: '#comites',
      active: false,
    },
    {
      value: 'Autores',
      link: '#autores',
      active: false,
    },
    {
      value: 'Eixos Temáticos',
      link: '#eixos',
      active: false,
    },
    {
      value: 'Trabalhos',
      link: '#trabalhos',
      active: true,
    },
    {
      value: 'Contato',
      link: '#contato',
      active: false,
    },
  ];
  showResume = false;
  resume = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.',
    'Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.',
    'Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.',
    'Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  ];
  shortResume = this.resume[0].slice(0, 765) + '...';

  user = [
    {
      avatar: '../assets/img/avatar.png',
      email: 'alguem12@galoascience.com',
    },
  ];

  info = [
    {
      type: 'Pôster',
      axis: 'Alimentação e saúde (AS)',
      keyword: 'Alimentos funcionais, alimentação escolar.',
      author: [
        'Galileo Galilei¹',
        'Berta Lange de Morretes²',
        'Isaac Newton³',
        'Cesar Lattes¹',
        'Stephen Hawking⁴',
      ],
      school: [
        '¹Universidade Estadual de Campinas',
        '²Universidade de São Paulo',
        '³Instituto Nacional de Pesquisas Espaciais',
        '⁴Universidade Federal do Rio de Janeiro',
      ],
    },
  ];
  newTopic = false;
  sendTopic = false;
  topicSend = false;
  comments = false;
  newAndSendClick() {
    this.newTopic = !this.newTopic;
    this.sendTopic = !this.sendTopic;
  }
  topicAndSendClick() {
    this.topicSend = !this.topicSend;
    this.sendTopic = !this.sendTopic;
  }
  newAndTopicClick() {
    this.newTopic = !this.newTopic;
    this.topicSend = !this.topicSend;
  }
}

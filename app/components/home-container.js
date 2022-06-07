import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { appetizeres, burgers, kids, salads } from '../data';

export default class HomeContainerComponent extends Component {
  @tracked appetizeres = appetizeres;
  @tracked burgers = burgers;
  @tracked salads = salads;
  @tracked kids = kids;
}

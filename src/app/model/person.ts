import { Education } from './education';
import { Experience } from './experience';
import { Proyect } from './proyect';
import { Skills } from './skills';

export class Person {
  nombre!: String;
  apellido!: String;
  fechaNac!: String;
  about_me!: string;
  educationList!: Array<Education>;
  laboralExperienceList!: Array<Experience>;
  proyectsList!: Array<Proyect>;
  skillsList!: Array<Skills>;
}

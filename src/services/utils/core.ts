export class BodyHandle {
  weight: number;
  height: number;
  chest: number;
  waist: number;
  hip: number;

  constructor(weight: number, height: number) {
    this.weight = weight;
    this.height = height;
    this.chest = 0;
    this.waist = 0;
    this.hip = 0;
  }

  SetThreeCircum(chest: number, waist: number, hip: number) {
    this.chest = chest;
    this.waist = waist;
    this.hip = hip;
  }

  CalBMI(): number {
    if (this.height === 0 || this.weight === 0 ) {
      throw new Error("weight and height does not init")
    }
    return this.weight / (this.height * this.height);
  }
}

export class Task{
  public tasklabel : string;
  public updatedWhen : string;

  constructor(tasklabel : string, updatedWhen : string){
   this.tasklabel=tasklabel;
   this.updatedWhen = updatedWhen;
  }
}

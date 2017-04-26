export class BorderedTables {
  public page: string;
  public visits: number;
  public newVisits: number;
  public revenue: number;

constructor(page: string, visits: number, newVisits:number, revenue:number  ) {
    this.page = page;
    this.visits = visits;
      this.newVisits = newVisits;
        this.revenue = revenue;
  }
}

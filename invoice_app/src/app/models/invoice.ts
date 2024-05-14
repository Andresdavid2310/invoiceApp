import { Cliente } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice {
    id!: number;
    name!: string;
    client!: Cliente;
    company!: Company;
    items!: Item[];
    total!: number;
}
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "Book",
})
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;
  
  @Column()
  authors: string;

  @Column()
  isbn: string;

  @Column()
  description: string;
}

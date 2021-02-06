import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Todo{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @DeleteDateColumn()
    deletedAt: Date;


}
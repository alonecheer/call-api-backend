import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001 extends Model<Form001> {
    @AllowNull(false)
    @PrimaryKey
    @AutoIncrement
    @Column
    o_id: number;

    @AllowNull(false)
    @Column
    o_no: string;

    @AllowNull(false)
    @Column
    o_date: string;

    @AllowNull(false)
    @Column
    o_year: string;

    @AllowNull(false)
    @Column
    o_purpose: string;

    @AllowNull(false)
    @Column
    o_committee1: string;

    @AllowNull(false)
    @Column
    o_committee2: string;

    @AllowNull(false)
    @Column
    o_committee3: string;

    @AllowNull(false)
    @Column
    o_numdoc: number;

    @AllowNull(false)
    @Column
    o_pricedoc: number;

    @AllowNull(false)
    @Column
    o_committee4: string;

    @AllowNull(false)
    @Column
    o_committee5: string;

    @AllowNull(false)
    @Column
    o_committee6: string;

    @AllowNull(false)
    @Column
    o_budgettype: string;

    @AllowNull(false)
    @Column
    o_budgetname: string;

    @AllowNull(false)
    @Column
    o_budgetdoc: number;

    @AllowNull(false)
    @Column
    o_approve: string;

    @AllowNull(false)
    @Column
    o_approver: string;

    @AllowNull(false)
    @Column
    staff_id: string;

    @AllowNull(false)
    @Column
    o_status: string;

    @AllowNull(false)
    @Column
    o_status_id: number;

    @AllowNull(false)
    @Column
    o_user: string;

}
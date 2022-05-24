import type { PromoEnum } from "./enum/PromoEnum";

export default class User {
    private firstName: string | undefined;
    private lastName: string | undefined;
    private password: string | undefined;
    private email: string | undefined;
    private studentId: number | undefined;
    private promo: PromoEnum | undefined;
    private association: string | undefined;

    constructor(firstName: string | undefined, lastName: string | undefined,
        password: string | undefined, email: string | undefined,
        studentId: number | undefined, promo: PromoEnum | undefined,
        association: string | undefined) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.email = email;
            this.studentId = studentId;
            this.promo = promo;
            this.association = association;
    }


    

    public static Builder = new class {
        private firstName: string | undefined;
        private lastName: string | undefined;
        private password: string | undefined;
        private email: string | undefined;
        private studentId: number | undefined;
        private promo: PromoEnum | undefined;
        private association: string | undefined;

        public withFirstName(firstName: string) {
            this.firstName = firstName;
            return this;
        }

        public withLastName(lastName: string) {
            this.lastName = lastName;
            return this;
        }

        public withPassword(password: string) {
            this.password = password;
            return this;
        }

        public withEmail(email: string) {
            this.email = email;
            return this;
        }

        public withStudentId(studentId: number | undefined) {
            this.studentId = studentId;
            return this;
        }

        public withPromo(promo: PromoEnum | undefined) {
            this.promo = promo;
            return this;
        }

        public withAssociation(association: string | undefined) {
            this.association = association;
            return this;
        }

        public build() : User {
            return new User(this.firstName, this.lastName, this.password, this.email,
                this.studentId, this.promo, this.association);
        }
    } 
}
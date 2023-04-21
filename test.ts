import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

@modelOptions({
    "schemaOptions": {
        "collection": "test"
    }
})
class Test {
    @prop()
    nombre!: string

    @prop()
    edad!: number
}

export const testModel = getModelForClass(Test)
package application

import Person

class Service {
    fun hello() = "Hello KotlinJS!"
    fun iam(): Person {
        return object: Person {
            override fun address(): String = "hogehoge"
            override var name = "aaa"
            override var age: Number = 10
        }
    }
}

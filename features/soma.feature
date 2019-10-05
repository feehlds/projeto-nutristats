Feature: Soma e subtração de dois números

    Cenário Teste de soma e subtração de dois números

    Scenario: Soma de dois números
        Given I am a mathematic teacher
        When I sum 2 plus 2
        Then The result should be 4

    Scenario Outline: Subtração de dois números
        Given I am a mathematic teacher
        When I subtract <v1> and <v2>
        Then The result should be <result>

        Examples:
        | v1 | v2 | result |
        |  8 |  3 |      5 |
        | 15 |  9 |      6 |
        | 56 | 43 |     13 |
Feature: Soma de dois números

    Cenário Teste de soma de dois números

    Scenario: Soma de dois números
        Given I am a mathematic teacher
        When I sum "2" plus "2"
        Then The result should be "4"
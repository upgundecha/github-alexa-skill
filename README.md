# Custom Alexa Skill

## Intent Schema

```
{
    "intents":[
        {
            "intent":"FollowerCount"
        }
    ]
}
```
## Utterances
```
FollowerCount how many followers do I have
FollowerCount current followers
FollowerCount number of followers
```

# Lambda Configuration

1. Name - GithubAlexaSkill
2. Trigger - Alexa Skill Kit
3. Upload the code archive
4. Add USERNAME environment variable with Github Account name
5. Execution Role > Create new role from template(s) > role_name > Simple Microservices permissions

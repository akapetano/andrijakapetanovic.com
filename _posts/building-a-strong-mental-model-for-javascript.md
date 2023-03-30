---
title: "Building a strong mental model for JS"
date: "2023-02-20"
---

After coding for a while, you start thinking more about the way you think about code, the approaches, and steps you take to realize your ideas into code. In other words, you start thinking about how you think. We can also call it meta-thinking. I probably didn't coin this expression.

You also start hearing a lot about mental models. Sounds interesting, right? But what's a mental model exactly? Let's try reading the following code:

`let dog = 'Rex';`
`let friend = dog;`
`dog = 'Toby';`

Alright, so here it goes:

- `let dog = 'Rex';`

- Declare a variable called `dog`. Set it to `'Rex'`. So the dog's name is Rex, nice.

- `let friend = dog;`

- Declare a variable called friend. Set it to dog. The dog is Rex, so friend is also Rex. Sweet, Rex is a friend, but also a dog.

- `dog = 'Toby';`

- Set dog variable to 'Toby'.

- Result: `dog` is now `'Toby'`, and `friend` is `'Rex'`.

That's that monologue which we're usually not even aware of unless your level of introspection is really on a higher level. When I started this journey, I always wondered how should I think or in which manner should I rewire myself in order to become a developer. And indeed, some rewiring was necessary, but all of that came with time and a lot of practice. It does not come over night.

Even after nine months of intensive learning, I believe that a lot of my mental models are either incomplete or completely wrong. That's the reason why I decided to go through the course "Just JavaScript" by Dan Abramov. Here, I'm going to go through each chapter, and my mental model before, and after reading it.

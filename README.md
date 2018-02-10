**Game Technologies Lab**

**Haoyun Li**

**First Project**

**What is the line of inquiry of my first project?**

As we used Unity3D to do game making last semester. I am very interested to this
software. So, I am wondering how to make this type of game engines and could we
make a simple one.

I googled my question on the Internet. The Wikipedia says, “The core
functionality typically provided by a game engine includes a rendering engine
for 2D or 3D graphics, a **physics engine** or collision
detection, sound, scripting, animation, artificial intelligence, networking,
streaming, memory management, threading, localization support, scene graph, and
may include video support for cinematics.”
(<https://en.wikipedia.org/wiki/Game_engine>)

I have impression about physics engine. Every time I add rigid body to an
object, If I don’t set a platform to catch it, it will fall down away. This is
because the Unity has physics engine. It simulates the real-world physics rules
to the virtual world.

For this reason, I want to realize a very simple physics engine by myself.

**The plan of exploration**

I finally decide to use the coding language of JavaScript in P5.js. Because
recently I am learning it, and it is better for me to have an uncomplicated way
to know whether I am doing right through a visible canvas. I plan to introduce
gravity and elastic force to the project and do some effect with two balls. If
the balls move correctly, the physics engine is correct.

**The results of my exploration.**

I make a class of Balls to restore the property of every ball. The most
important property are velocity, accelerate velocity, position, mass and size.

To make physics engine, we need to know well about physics, especially we need
to know what formula should be used in A situation and what formula should be
used in B situation.

Here are the most important formulas I was used in my project.

The relationship between velocity and accelerate velocity:

Vt = V0+a\*t

momentum conservation:

m1v1+m2v2=m1v1'+m2v2'

I create an collision detect function to activate momentum conservation formula,
so we can see how two balls would move and interact with each other when we
change the mass and velocity of balls.

**Citation**

<https://en.wikipedia.org/wiki/Game_engine>

# Why the Carnival Results?

In Brazil, refers to the process of calculating and announcing the scores and rankings of the participating samba schools or carnival parades after the performances. It is an important event that determines the winners of the carnival competition.

I don't have strong enthusiasm for carnival, but I don't dislike it either. However, there is a sentimental reason why I chose this project to build my portfolio. This was probably the first relevant project that I developed using a JS framework, while I was a developer working at Grupo Bandeirantes, a TV channel at Brazil. I worked with their internet portal team and was responsible for developing the leaderboard for the Carnival coverage. It was a project that I take great pride in.

In addition to that, it is a project with a narrow scope but provides an opportunity to apply a variety of knowledge and skills.

# Ranking Rules

1 - At the end of the results apuration, the school with the highest grade will be declared Winner;
2 - The two schools with the lowest grades will be relegated and will compete in the access group on the following year;
3 - For building the final grade, the schools are judged in several categories with grades from 8 to 10. They are judged for up to 5 specialists and the lowest grade of each category is discarted;
3 - Tiebreaking criteria:
    - First criteria: Before the apuration, a random category is sorted for the tiebreaking
    - Second criteria: The total grade including the discarted grades;
    - Third criteria: Will be declared winner the School with more 10 grades (I invent this criteria for adding complexy in my project);
    - If the draw persist, the next criteria is the higgest grade per category, starting from the last and checking in decrescenting order. The final category grades of the tied schools are compared and, if they are different, the school with the highest one are declared winner.
    - In a case when the tie persists, both schools are declared winner of


# Code Structure

- In the real life, this is a read-heavy application with small space for caching, since the screen needs to be updated as grade are announced. 
- Two needs here:
    - A very fast store for current data retrive. At this point I am analyzing two options: saving at redis or in a simple json file.
    - Since data audit is also important for the application scenario, I'll save a history of the leaderboard after every single grade announced, probably in a mongodb instance.

3 possible Redis collections:
- Current Apuration:
    - Category
    - Judge
- Categories for apuration
- Ranking

# Use cases

1 - Admin configures the leaderboard (adding schools, categories and judges).
2 - Admin runs a new apuration.
3 - Admin adds the grades of each judge for the categories.
3 - User sees the current leaderboard. 
4 - User sees all grade updates in real time.
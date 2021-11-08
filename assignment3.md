# World Plastic Pollution by Industrial Sectors

[Home](/README.md)

Plastic has become an inseparable part of human development, despite the first commercial use and large scale production is dated back to the 1950s. 
Plastic has diversified uses and consumed by a number of sectors worldwide. The principal consumer of plastics is packaging industry (consumes almost 36% of the 
total world plastic production). Interestingly, this sector is also the highest contributor in the global plastic waste production. The low cost, durability, 
easiness in processing, lightweight, high thermal, and electrical insulation has made plastic attractive for its applications ranging from food packaging to 
electrical industries.

## 1. Data Visualization and Source

The below chart is used by a research paper that talks about "Plastic Pollution in Bangladesh: A review on current status emphasizing the impacts on environment and public health".
This paper was published on the Environmental Engineering Research forum and it talks about the use and consumption of plastics on a global level as well. 

I was doing my research on plastic pollution and came across the below visualization (fig. 1). It took me almost 2 mins to fully understand the story behind the visualization. 
The pie chart intends to provide important information, but it is very difficult to interpretn. Hence, I thought it would be a good idea to try and improve this visualization.

![image](https://user-images.githubusercontent.com/24672169/140813966-4d431240-5af4-4717-8ce1-3944b04d814b.png)

Source: [Environmental Engineering Research](/https://www.eeer.org/journal/view.php?number=1245)

## 2. Wireframing a Solution

Before moving on the create a wireframe solution, I had to first establish a context for the visualization. We need the reader to learn something from this chart and not just read data from it. So the primary context I decided was that a user should be able to understand how much of the plastic consumed by each global sector is going into waste every year. With this being established I started to create a wireframe.

The primary challenge with recreating a solution was to move away from a Pie chart and still represent the data in percentage of total global values. I tried to flatten the pie char into split bars, and put them side by side to alow a direct comparison between the two. I also updated the color scheme to be consistent across the two bars, so that the reader is not confused. Finally I removed the duplicate index and drew a common index between the graph that can direct the user to draw a one-to-one comparison between the two charts.

![image](https://user-images.githubusercontent.com/24672169/140815659-e45a3bd2-c4bf-46b7-b98d-34bab8fa47c2.png)

## 3. Testing the Solution

I interviewed two people by showing them the wireframe solution to get their feedback. These interviews were based on a set of questions to understand their interpretation of the visual and check if the correct information is conveyed.

#### Interview 1

1. **Can you tell me what you think this is?** The person A correctly identified the graph as a compariosn between plastic consumption and waste generation. But person A could not understand if the 46% of packaging waste was of total or 46% of consumption.
2. **Can you describe to me what this is telling you?** Person A was not able to clearly understand if the waste production was a subset of consumption or an independent value.
3. **Is there anything you find surprising or confusing?** Person A found the arrow legend to be a little confusing and distracting. He also was not clear if the data represented the entire world or a particular country. Person A did not understand why other was in the middle and not in the end.
4. **Who do you think is the intended audience for this?** Person A identified the audience as researchers and government organizations who are interested in sector wise generation of plastic waste
5. **Is there anything you would change or do differently?** Person A had not seen similar chart before and thought that a stacked bar chart could be a better representation.

#### Interview 2

1. **Can you tell me what you think this is?** Person B took about 15 seconds to read the graph. She identified it as a comparison between plastic consumption and waste of different sectors.
2. **Can you describe to me what this is telling you?** She identified that waste is more than consumption. This implies inefficient utilization. She also indentified some industries as being more efficient.
3. **Is there anything you find surprising or confusing?** She did not find the graph confusing. However her first interpresentation was consumption is always more than waste.
4. **Who do you think is the intended audience for this?** Someone who is concerned about environment and wants to say that we should stop/reduce using plastic. 
5. **Is there anything you would change or do differently?** She would try to highlight the sectors that have more consumption than waste.

### Learnings & Changes

Both the interviews were quite resourceful and provided some key insights from a viewer perspective. Based on their feedback, I decided to make the following changes:
1. Add a new title to clearly convenvy the intent of the visualization
2. Change the represention from proportional bar chart to side by side column chart. This was with the primary purpose of conveying the message that "How much of plastic consumed by different sectors is converted into waste?"
3. I also moved away from percentage representation. I tried to trace the source of data and was able to identify two data sources from a [technical paper](/). I used these sources to create my data and recreate the visualization.
4. I labelled each column with its corresponding value in million tonne.
5. Finally, I moved the other sector to the end and arranged every sector in the decending order of their waste production.


## 4. Final Solution

Below is the final visualization that was created after an exhaustive critique and redesigning process. The chart is intended for readers who are interested to learn more about plastic pollution and its contribution by different sectors. They can be researchers, government organizaitons, investors, students, etc. 
This chart should help the readers understand how much of the plastic consumed by each industry is thrown into waste. This waste represents the potential to improve and adopt more recycling practices for these sprcific industries.

One underlying observations would be that majority of plastic is consumed and wasted by the plastic industry. This is also in line with the point that the original author wanted to convey.

<div class="flourish-embed flourish-chart" data-src="visualisation/7769222"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

### *Thank You*

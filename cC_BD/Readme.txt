**********************************************************************************************
********************************   Decision Criteria   ***************************************
**********************************************************************************************

Each profile will have a match score between -400 and 100. This score considers the information of Current Role, 
Country, Industry and Number of Connections. These properties will be classified independently
in three categories:
    * Green
    * Yellow
    * Red

Based on this classification, the match score is modified with the following score:
    * Add 25 if it is green,
    * add 5 if it is yellow,
    * and substract 100 if it is red.

In this way, those profiles that have any category in red will be left with a very bad match score.

The classification criteria for each category were based on information from the bairesdev web.
Fundamentally the zone time of each country and the success stories of bairesdev's clients were 
considered.

The tags used to classify each category are based on the input received. In case of incorporating
more information it would be necessary to complete them.


**********************************************************************************************
**************************   Steps for next iteration   **************************************
**********************************************************************************************

    1 - Do data validations.
    2 - Do Unit test.
    3 - Refactor functions repeat sections of searchPotentialClientsBy..functions. Improve files 
        and functions order.
    4 - Get more friendly styles and aesthetic.
    5 - Incorporate an output report rating the quality of the selected and discarded profiles.

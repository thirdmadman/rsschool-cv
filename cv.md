# Nikita Mordvinov
![thirdmadman](https://avatars.githubusercontent.com/u/21088474?s=120)
## Contact info
@thirdmadman as in discord, telegram an github
## About me
- Less then 25 y.o. man, engineer, with master's degree of "Electronics and nanoelectronics".
- Works as TS-engineer Tier II in Moscow web-hosting company over 3 years
- Knowledge is the way to success for me
## Skills
- Hard Skills: 
  - tech and lang: git, html, css, js, vue.js, php, laravel, java, spring boot, c++, docker, linux,
  - prog: VS code, Fusion 360, Photoshop, Illustrator, bash-like consoles
- Soft Skills: 
  - Adaptability
  - Diagnostic intuition
  - Process automatization
## Code examples
Bot for automatization "tasks" sending from billing system in Asana:
```
    public ArrayList<String> getTasksDedicId() {
        ArrayList<String> tasks = new ArrayList<>();
        HttpController http = new HttpController();
        Map<String, String> requestParams = new HashMap<>();
        try {
            requestParams = new HashMap<>();
            requestParams.put("out", "JSONdata");
            requestParams.put("auth", this.authToken);
            requestParams.put("func", "task");
            JSONArray tasksArray = null;
            String authContent = http.getHttpsReqWithData(GlobalSettings.getProperty("config.billmgrUrl"), requestParams);

            if (authContent.length() > 0) {
                String jsonNoChecked = authContent.replace(": null", "\"\"");
                tasksArray = new JSONArray(jsonNoChecked);
                if (tasksArray != null) {
                    for (int i = 0; i < tasksArray.length(); i++) {
                        JSONObject task = null;
                        try {
                            task = tasksArray.getJSONObject(i);
                            if (task.getString("itemtype_intname").equals("dedic")) {
                                tasks.add(task.getString("id"));
                            }
                        } catch (Exception e) {
                            log.log(Level.WARNING, "BILLMGR: getTasksDedicId: ERROR fetching JSON: some fields may be empty, id: [" + task.getString("id") + "]");
                        }
                    }
                    return tasks;
                }
            } else {
                log.log(Level.SEVERE, "BILLMGR: getTasksDedicId: Bad response of JSON - empty");
                System.out.println("No correct JSON found");
            }
        } catch (Exception e) {
            log.log(Level.SEVERE, "BILLMGR: getTasksDedicId: Failed to load JSON");
            e.printStackTrace();
        }
        return null;
    }
```
## Experience
* [COMPANY NAME HIDDEN] Technical Support engineer Tier II, from 2018 till now
* NetCracker (mano) java developer courses certificate, project School Journal (teamlead, fullstack) [on github](https://github.com/nceduc-mano-tlt-org/2019-school-journal) 2018-2019
* Embedded software engineer, [COMPANY NAME HIDDEN] 2 projects 09.2020-03.2021
## Education
* htmlacademy.ru tasks from free course of css and html
* NetCracker java developer courses
* RS-school JS-FE-2020-Q3 [not complited]
* TGU master's degree of "Electronics and nanoelectronics"
## Languages
* Russian (native language)
* English (Intermediate) 
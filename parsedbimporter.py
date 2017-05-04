import csv
import json,httplib
connection = httplib.HTTPSConnection('parseapi.back4app.com', 443)
connection.connect()

f = open('contacts_source_v2.csv')
reader = csv.reader(f)
header = True
for each in reader:
    if header:
        header=False
    else:
        if each[2] and each[3]:
            print "Name: "+str(each[2])
            print "Phone: "
            print int(each[3].replace(' ',''))
            print "Email: "+str(each[1])
            print "cityorvillage: "+str(each[4])
            print "stateandcountry: "+str(each[5])
            print "selfexample: "+str(each[6])
            print "whyjoin: "+str(each[7])
            print "readyarea: "+str(each[8])
            print "expertise: "+str(each[9])
            print "platforms: "+str(each[10])
            print "$$$$$$$$$$$$$"
            connection.request('POST', '/classes/contacts', json.dumps({
                   "Name": each[2],
                   "Phone": int(each[3].replace(' ','')),
                   "Email": each[1],
                   "cityorvillage": each[4],
                   "stateandcountry": each[5],
                   "selfexample": each[6],
                   "whyjoin": each[7],
                   "readyarea": each[8],
                   "expertise": each[9],
                   "platforms": each[10]
                 }), {
                   "X-Parse-Application-Id": "<id>",
                   "X-Parse-REST-API-Key": "<key>",
                   "Content-Type": "application/json"
                 })
            results = json.loads(connection.getresponse().read())
            print results

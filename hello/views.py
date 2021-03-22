
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *
from rest_framework.response import Response



class SchoolViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = School.objects.all()
    serializer_class = SchoolSerializer
    # permission_classes = [permissions.IsAuthenticated]


class AssessmentViewset(viewsets.ViewSet):

    queryset = Assessment.objects.all()

    def create(self, request):

        assessment = Assessment()
        school = School.objects.get(pk=request.data['school'])

        assessment.last_name = request.data['last_name']
        assessment.teacher = request.data['teacher']
        assessment.class_grade = request.data['class_grade']
        assessment.birth_date = request.data['birth_date']
        assessment.school = school
        assessment.previous_participation = request.data['previous_participation']
        assessment.pretest = request.data['pretest']
        assessment.q01_answer = request.data['q01_answer']
        assessment.q02_answer = request.data['q02_answer']
        assessment.q03_answer = request.data['q03_answer']
        assessment.q04_answer = request.data['q04_answer']
        assessment.q05_answer = request.data['q05_answer']
        assessment.q06_answer = request.data['q06_answer']
        assessment.q07_answer = request.data['q07_answer']
        assessment.q08_answer = request.data['q08_answer']
        assessment.q09_answer = request.data['q09_answer']
        assessment.q10_answer = request.data['q10_answer']
        assessment.q11_answer = request.data['q11_answer'] if request.data['q11_answer'] else ""
        assessment.q12_answer = request.data['q12_answer'] if request.data['q12_answer'] else ""
        assessment.q13_answer = request.data['q13_answer'] if request.data['q13_answer'] else ""
        assessment.q14_answer = request.data['q14_answer']
        assessment.q15_answer = request.data['q15_answer']
        assessment.q16_answer = request.data['q16_answer']
        assessment.q17_answer = request.data['q17_answer'] if request.data['q17_answer'] else ""
        assessment.q18_answer = request.data['q18_answer'] if request.data['q18_answer'] else ""
        assessment.q19_answer = request.data['q19_answer'] if request.data['q19_answer'] else ""
        assessment.q20_answer = request.data['q20_answer'] if request.data['q20_answer'] else ""
        assessment.q21_answer = request.data['q21_answer'] if request.data['q21_answer'] else ""
        assessment.q22_answer = request.data['q22_answer'] if request.data['q22_answer'] else ""
        assessment.q23_answer = request.data['q23_answer']
        assessment.q24_answer = request.data['q24_answer']
        assessment.q25_answer = request.data['q25_answer']
        assessment.q26_answer = request.data['q26_answer']
        assessment.q27_answer = request.data['q27_answer']
        assessment.q28_answer = request.data['q28_answer']
        assessment.q29_answer = request.data['q29_answer']
        assessment.q30_answer = request.data['q30_answer']
        assessment.q31_answer = request.data['q31_answer']
        assessment.q32_answer = request.data['q32_answer']


        if assessment.pretest == False:
            assessment.q33_answer = request.data['q33_answer']
            assessment.q34_answer = request.data['q34_answer']
            assessment.q35_answer = request.data['q35_answer']

        # FIGURE OUT HOW LENIENT GRADING SHOULD BE
        assessment.q01_score = 1 if assessment.q01_answer == 'b' else 0
        assessment.q02_score = 1 if assessment.q02_answer == 'b' else 0
        assessment.q03_score = 1 if assessment.q03_answer == 'a' else 0
        assessment.q04_score = 1 if assessment.q04_answer == 'c' else 0
        assessment.q05_score = 1 if assessment.q05_answer == 'd' else 0
        assessment.q06_score = 1 if assessment.q06_answer == 'b' else 0
        assessment.q07_score = 1 if assessment.q07_answer == 'd' else 0
        assessment.q08_score = 1 if assessment.q08_answer == 'b' else 0
        assessment.q09_score = 1 if assessment.q09_answer == 'd' else 0
        assessment.q10_score = 1 if assessment.q10_answer == 'a' else 0
        assessment.q11_score = 1 if assessment.q11_answer == '62.00' else 0
        assessment.q12_score = 1 if assessment.q12_answer == '20.00' else 0
        assessment.q13_score = 1 if assessment.q13_answer == '42.00' else 0
        assessment.q14_score = 1 if assessment.q14_answer == 'Macy\'s' else 0
        assessment.q15_score = 1 if assessment.q15_answer == 'Three and 75/100' else 0
        assessment.q16_score = 1 if assessment.q16_answer == 'James Dunn' else 0
        assessment.q17_score = 1 if assessment.q17_answer == '21.25' else 0
        assessment.q18_score = 1 if assessment.q18_answer == '008' else 0
        assessment.q19_score = 1 if assessment.q19_answer == 'Journeys' else 0
        assessment.q20_score = 1 if assessment.q20_answer == '5.00' else 0
        assessment.q21_score = 1 if assessment.q21_answer == '16.25' else 0
        assessment.q22_score = 1 if assessment.q22_answer == '' else 0
        assessment.save()
        

        serializer = AssessmentSerializer(assessment, context={'request': request})
        return Response(serializer.data)


    def list(self, request):

        assessments = Assessment.objects.all()
        serializer = AssessmentSerializer(assessments, many=True, context={'request': request})
        
        return Response(serializer.data)
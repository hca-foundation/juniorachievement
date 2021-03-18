
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
        assessment.q11_answer = request.data['q11_answer']
        assessment.q12_answer = request.data['q12_answer']
        assessment.q13_answer = request.data['q13_answer']
        assessment.q14_answer = request.data['q14_answer']
        assessment.q15_answer = request.data['q15_answer']
        assessment.q16_answer = request.data['q16_answer']
        assessment.q17_answer = request.data['q17_answer']
        assessment.q18_answer = request.data['q18_answer']
        assessment.q19_answer = request.data['q19_answer']
        assessment.q20_answer = request.data['q20_answer']
        assessment.q21_answer = request.data['q21_answer']
        assessment.q22_answer = request.data['q22_answer']
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
        assessment.q33_answer = request.data['q33_answer']
        assessment.q34_answer = request.data['q34_answer']
        assessment.q35_answer = request.data['q35_answer']

        answerKey = {
            'q01_answer': 'b', 'q02_answer': 'b', 'q03_answer': 'a', 'q04_answer': 'c',
            'q05_answer': 'd', 'q06_answer': 'b', 'q07_answer': 'd', 'q08_answer': 'b',
            'q09_answer': 'd', 'q10_answer': 'a', 'q11_answer': '62', 'q12_answer': '20',
            'q13_answer': '42', 'q14_answer': 'Macy\'s', 'q15_answer': 'Three and 75/100',
            'q16_answer': '', 'q17_answer': '3.75', 'q18_answer': '21.25', 'q19_answer': 'Journeys',
            'q20_answer': '5.00', 'q21_answer': '5.00', 'q22_answer': '16.25'
        }

        # FIGURE OUT HOW LENIENT GRADING SHOULD BE

        assessment.q01_score = 1 if assessment.q01_answer == answerKey["q01_answer"] else 0
        assessment.q02_score = 1 if assessment.q02_answer == answerKey['q02_answer'] else 0
        assessment.q03_score = 1 if assessment.q03_answer == answerKey['q03_answer'] else 0
        assessment.q04_score = 1 if assessment.q04_answer == answerKey['q04_answer'] else 0
        assessment.q05_score = 1 if assessment.q05_answer == answerKey['q05_answer'] else 0
        assessment.q06_score = 1 if assessment.q06_answer == answerKey['q06_answer'] else 0
        assessment.q07_score = 1 if assessment.q07_answer == answerKey['q07_answer'] else 0
        assessment.q08_score = 1 if assessment.q08_answer == answerKey['q08_answer'] else 0
        assessment.q09_score = 1 if assessment.q09_answer == answerKey['q09_answer'] else 0
        assessment.q10_score = 1 if assessment.q10_answer == answerKey['q10_answer'] else 0
        assessment.q11_score = 1 if assessment.q11_answer == answerKey['q11_answer'] else 0
        assessment.q12_score = 1 if assessment.q12_answer == answerKey['q12_answer'] else 0
        assessment.q13_score = 1 if assessment.q13_answer == answerKey['q13_answer'] else 0
        assessment.q14_score = 1 if assessment.q14_answer == answerKey['q14_answer'] else 0
        assessment.q15_score = 1 if assessment.q15_answer == answerKey['q15_answer'] else 0
        assessment.q16_score = 1 if assessment.q16_answer == answerKey['q16_answer'] else 0
        assessment.q17_score = 1 if assessment.q17_answer == answerKey['q17_answer'] else 0
        assessment.q18_score = 1 if assessment.q18_answer == answerKey['q18_answer'] else 0
        assessment.q19_score = 1 if assessment.q19_answer == answerKey['q19_answer'] else 0
        assessment.q20_score = 1 if assessment.q20_answer == answerKey['q20_answer'] else 0
        assessment.q21_score = 1 if assessment.q21_answer == answerKey['q21_answer'] else 0
        assessment.q22_score = 1 if assessment.q22_answer == answerKey['q22_answer'] else 0
        assessment.save()
        

        serializer = AssessmentSerializer(assessment, context={'request': request})
        return Response(serializer.data)


    def list(self, request):

        assessments = Assessment.objects.all()
        serializer = AssessmentSerializer(assessments, many=True, context={'request': request})
        
        return Response(serializer.data)


# class PreAssessmentViewset(viewsets.ViewSet):
#     queryset = Preassessment.objects.all()
#     # serializer_class = PreAssessmentSerializer

#     def create(self, request):
#         preassessment = Preassessment()
#         preassessment.last_name = request.data['last_name']
#         preassessment.teacher = request.data['teacher']
#         preassessment.class_grade = request.data['class_grade']
#         preassessment.birth_date = request.data['birth_date']
#         preassessment.school = request.data['school']
#         preassessment.previous_participation = request.data['previous_participation']
#         preassessment.q01_answer = request.data['q01_answer']
#         preassessment.q02_answer = request.data['q02_answer']
#         preassessment.q03_answer = request.data['q03_answer']
#         preassessment.q04_answer = request.data['q04_answer']
#         preassessment.q05_answer = request.data['q05_answer']
#         preassessment.q06_answer = request.data['q06_answer']
#         preassessment.q07_answer = request.data['q07_answer']
#         preassessment.q08_answer = request.data['q08_answer']
#         preassessment.q09_answer = request.data['q09_answer']
#         preassessment.q10_answer = request.data['q10_answer']
#         preassessment.q11_answer = request.data['q11_answer']
#         preassessment.q12_answer = request.data['q12_answer']
#         preassessment.q13_answer = request.data['q13_answer']
#         preassessment.q14_answer = request.data['q14_answer']
#         preassessment.q15_answer = request.data['q15_answer']
#         preassessment.q16_answer = request.data['q16_answer']
#         preassessment.q17_answer = request.data['q17_answer']
#         preassessment.q18_answer = request.data['q18_answer']
#         preassessment.q19_answer = request.data['q19_answer']
#         preassessment.q20_answer = request.data['q20_answer']
#         preassessment.q21_answer = request.data['q21_answer']
#         preassessment.q22_answer = request.data['q22_answer']
#         preassessment.q23_answer = request.data['q23_answer']
#         preassessment.q24_answer = request.data['q24_answer']
#         preassessment.q25_answer = request.data['q25_answer']
#         preassessment.q26_answer = request.data['q26_answer']
#         preassessment.q27_answer = request.data['q27_answer']
#         preassessment.q28_answer = request.data['q28_answer']
#         preassessment.q29_answer = request.data['q29_answer']
#         preassessment.q30_answer = request.data['q30_answer']
#         preassessment.q31_answer = request.data['q31_answer']
#         preassessment.q32_answer = request.data['q32_answer']
       
#         serializer = PressessmentSerializer(preassessment, context={'request': request})
#         return Response(serializer.data)

# class PostAssessmentViewset(viewsets.ViewSet):
#     queryset = Postassessment.objects.all()
#     serializer_class = PostAssessmentSerializer


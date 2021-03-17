
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
        assessment.last_name = request.data['last_name']
        assessment.teacher = request.data['teacher']
        assessment.class_grade = request.data['class_grade']
        assessment.birth_date = request.data['birth_date']
        assessment.school = request.data['school']
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

        # assessment.q01_score = 
        # assessment.q02_score = 
        # assessment.q03_score = 
        # assessment.q04_score = 
        # assessment.q05_score = 
        # assessment.q06_score = 
        # assessment.q07_score = 
        # assessment.q08_score = 
        # assessment.q09_score = 
        # assessment.q10_score = 
        # assessment.q11_score = 
        # assessment.q12_score = 
        # assessment.q13_score = 
        # assessment.q14_score = 
        # assessment.q15_score = 
        # assessment.q16_score = 
        # assessment.q17_score = 
        # assessment.q18_score = 
        # assessment.q19_score = 
        # assessment.q20_score = 
        # assessment.q21_score = 
        # assessment.q22_score = 


        serializer = AssessmentSerializer(assessment, context={'request': request})
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


answerKey = {
    'q01_answer': 'b', 'q02_answer': 'b', 'q03_answer': 'a', 'q04_answer': 'c',
    'q05_answer': 'd', 'q06_answer': 'b', 'q07_answer': 'd', 'q08_answer': 'b',
    'q09_answer': 'd', 'q10_answer': 'a', 'q11_answer': '62', 'q12_answer': '20',
    'q13_answer': '42', 'q14_answer': 'Macy\'s', 'q15_answer': 'Three and 75/100',
    'q16_answer': '', 'q17_answer': '3.75', 'q18_answer': '21.25', 'q19_answer': 'Journeys',
    'q20_answer': '5.00', 'q21_answer': '5.00', 'q22_answer': '16.25'
}
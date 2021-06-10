from rest_framework import serializers
from .models import *


class SchoolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = School
        fields = ['id', 'school_name', 'district']


class AssessmentSerializer(serializers.HyperlinkedModelSerializer):
    school = serializers.PrimaryKeyRelatedField(queryset=School.objects.all(), many=False)

    class Meta:
        model = Assessment
        fields = ['last_name', 'birth_date', 'class_grade', 'teacher', 'school',
                'previous_participation', 'student_id', 'date', 'pretest', 'q01_answer',
                'q01_score', 'q02_answer', 'q02_score', 'q03_answer', 'q03_score',
                'q04_answer', 'q04_score', 'q05_answer', 'q05_score', 'q06_answer',
                'q06_score', 'q07_answer', 'q07_score', 'q08_answer', 'q08_score',
                'q09_answer', 'q09_score', 'q10_answer', 'q10_score', 'q11_answer',
                'q11_score', 'q12_answer', 'q12_score', 'q13_answer', 'q13_score',
                'q14_answer', 'q14_score', 'q15_answer', 'q15_score', 'q16_answer',
                'q16_score', 'q17_answer', 'q17_score', 'q18_answer', 'q18_score',
                'q19_answer', 'q19_score', 'q20_answer', 'q20_score', 'q21_answer',
                'q21_score', 'q22_answer', 'q22_score', 'q23_answer', 'q24_answer',
                'q25_answer', 'q26_answer', 'q27_answer', 'q28_answer', 'q29_answer',
                'q30_answer', 'q31_answer', 'q32_answer', 'q33_answer', 'q34_answer',
                'q35_answer']
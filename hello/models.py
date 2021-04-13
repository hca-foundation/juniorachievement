from django.db import models

class School(models.Model):
    school_name = models.CharField(max_length=255)
    district = models.CharField(max_length=255)


class Assessment(models.Model):
    last_name = models.CharField(max_length=3)
    birth_date = models.DateField()
    class_grade = models.CharField(max_length=50)
    teacher = models.CharField(max_length=200, default='None')
    school = models.ForeignKey(School, on_delete=models.DO_NOTHING)
    previous_participation = models.CharField(max_length=50)
    student_id = models.CharField(max_length=100)
    pretest = models.BooleanField()
    q01_answer = models.CharField(max_length=200)
    q01_score = models.IntegerField()
    q02_answer = models.CharField(max_length=200)
    q02_score = models.IntegerField()
    q03_answer = models.CharField(max_length=200)
    q03_score = models.IntegerField()
    q04_answer = models.CharField(max_length=200)
    q04_score = models.IntegerField()
    q05_answer = models.CharField(max_length=200)
    q05_score = models.IntegerField()
    q06_answer = models.CharField(max_length=200)
    q06_score = models.IntegerField()
    q07_answer = models.CharField(max_length=200)
    q07_score = models.IntegerField()
    q08_answer = models.CharField(max_length=200)
    q08_score = models.IntegerField()
    q09_answer = models.CharField(max_length=200)
    q09_score = models.IntegerField()
    q10_answer = models.CharField(max_length=200)
    q10_score = models.IntegerField()
    q11_answer = models.CharField(max_length=200)
    q11_score = models.IntegerField()
    q12_answer = models.CharField(max_length=200)
    q12_score = models.IntegerField()
    q13_answer = models.CharField(max_length=200)
    q13_score = models.IntegerField()
    q14_answer = models.CharField(max_length=200)
    q14_score = models.IntegerField()
    q15_answer = models.CharField(max_length=200)
    q15_score = models.IntegerField()
    q16_answer = models.CharField(max_length=200)
    q16_score = models.IntegerField()
    q17_answer = models.CharField(max_length=200)
    q17_score = models.IntegerField()
    q18_answer = models.CharField(max_length=200)
    q18_score = models.IntegerField()
    q19_answer = models.CharField(max_length=200)
    q19_score = models.IntegerField()
    q20_answer = models.CharField(max_length=200)
    q20_score = models.IntegerField()
    q21_answer = models.CharField(max_length=200)
    q21_score = models.IntegerField()
    q22_answer = models.CharField(max_length=200)
    q22_score = models.IntegerField()
    q23_answer = models.CharField(max_length=200)
    q24_answer = models.CharField(max_length=200)
    q25_answer = models.CharField(max_length=200)
    q26_answer = models.CharField(max_length=200)
    q27_answer = models.CharField(max_length=200)
    q28_answer = models.CharField(max_length=200)
    q29_answer = models.CharField(max_length=200)
    q30_answer = models.CharField(max_length=200)
    q31_answer = models.CharField(max_length=200)
    q32_answer = models.CharField(max_length=200)
    q33_answer = models.CharField(max_length=200)
    q34_answer = models.CharField(max_length=200)
    q35_answer = models.CharField(max_length=200)

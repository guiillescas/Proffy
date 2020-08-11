import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput, Picker } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import api from '../../services/api'

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()

    const res = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setIsFiltersVisible(false)
    setTeachers(res.data)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader 
          title="Proffys disponíveis" 
          headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible} style={styles.feather}>
              <Feather name="filter" size={22} color="#ddd" />
            </BorderlessButton>
          )}
        >
          { isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <View style={styles.picker}>
                <Picker
                  onValueChange={text => setSubject(text)}
                  selectedValue={subject}
                >
                  <Picker.Item label="Selecione uma opção" value={null} color="rgb(160, 160, 160)" />
                  <Picker.Item label="Artes" value="Artes"/>
                  <Picker.Item label="Biologia" value="Biologia"/>
                  <Picker.Item label="Ciências" value="Ciências" />
                  <Picker.Item label="Educação Física" value="Educação Física" />
                  <Picker.Item label="Geografia" value="Geografia" />
                  <Picker.Item label="História" value="História" />
                  <Picker.Item label="Inglês" value="Inglês" />
                  <Picker.Item label="Matemática" value="Matemática" />
                  <Picker.Item label="Português" value="Português" />
                  <Picker.Item label="Química" value="Química" />
                </Picker>
              </View>

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <View style={styles.picker}>
                    <Picker
                      selectedValue={week_day}
                      onValueChange={text => setWeek_day(text)}
                    >
                      <Picker.Item label="Selecione" value={null} color="rgb(160, 160, 160)"/>
                      <Picker.Item label="Segunda" value="1"/>
                      <Picker.Item label="Terça" value="2"/>
                      <Picker.Item label="Quarta" value="3"/>
                      <Picker.Item label="Quinta" value="4"/>
                      <Picker.Item label="Sexta" value="5"/>
                      <Picker.Item label="Sábado" value="6"/>
                      <Picker.Item label="Domingo" value="0"/>
                    </Picker>
                  </View>
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    style={styles.input}
                    value={time}
                    onChangeText={text => setTime(text)}
                    placeholder="Ex: 13:00"
                    placeholderTextColor="rgb(160, 160, 160)"
                  />
                </View>
              </View>

              <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </PageHeader>

        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          {teachers.map((teacher: Teacher) => {
            return (
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)}
              />
            )
          })}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default TeacherList